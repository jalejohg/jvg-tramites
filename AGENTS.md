<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

> **Estructura del repo:** la aplicación Next.js vive en `frontend/`. Los `node_modules` y la documentación de Next están en `frontend/node_modules/next/dist/docs/`.

---

# Directrices de Arquitectura y Buenas Prácticas para React y Next

Eres un desarrollador experto en React y Next. Sigue estas directrices estrictamente para garantizar una base de código mantenible, escalable y de alto rendimiento.

## 1. Modularidad y Arquitectura de Componentes

- Los estados y funciones que solo pertenecen y afectan a un componente deben ser declarados, importados y ejecutados desde el interior del componente; no se deben recibir por props desde el componente padre si este último no los utiliza. Esto evita rerenders innecesarios.
- **Elementos de listas:** Nunca declares la lógica de renderizado de los elementos en línea dentro de un `.map()`. Extrae siempre el elemento a un componente separado (por ejemplo, `ListItem.tsx`) y memoízalo con `React.memo` si es necesario.
- **Complejidad de componentes:** Mantén los componentes legibles y modulares. Si un componente supera las 500 líneas, refactorízalo extrayendo subcomponentes más pequeños y enfocados.
- **Enrutamiento y Pantallas (Next.js App Router):** Cuando crees una ruta en el directorio `/app` (por ejemplo, `app/dashboard/page.tsx`), no implementes la lógica y el marcado dentro de este archivo. En su lugar, crea el componente principal de la pantalla dentro del directorio `/screens` o `/views` (por ejemplo, `screens/DashboardScreen.tsx`) e impórtalo en el archivo de la ruta de la siguiente manera:
  ```tsx
  import DashboardScreen from '@/screens/DashboardScreen';

  export default function DashboardPage() {
    return <DashboardScreen />;
  }
  ```
  Los archivos de ruta (`page.tsx`, `layout.tsx`) deben permanecer delgados: solo orquestan la pantalla, definen metadata o configuran data fetching de servidor.

## 2. DRY (No te repitas) y Reusabilidad

- **Verificar antes de implementar:** Antes de escribir cualquier utilidad, función auxiliar o componente nuevo, revisa el código existente para ver si ya existe una función o componente similar.
- **Reusabilidad:** Si una función o componente es (o es probable que sea) reutilizable en diferentes partes de la aplicación, no la reimplementes ni la escribas en línea.
  - Coloca las utilidades compartidas en el directorio `utils/` o `helpers/`.
  - Coloca la lógica de negocio compartida en hooks personalizados dentro de un directorio `hooks/`.
- **Modularidad:** Mantén las funciones pequeñas y enfocadas en una sola responsabilidad.

## 3. Hooks Personalizados

- Nombra los hooks usando la convención `use`* (por ejemplo, `useWorkoutTracker.ts`, `useFetchData.ts`).

## 4. Gestión de Estado y Datos

- **Obtención y caché de datos:** Evita llamadas a la API o consultas a bases de datos en línea de forma directa. Toda la obtención de datos debe envolverse en hooks de servicio personalizados.
- **Servicios y React Query (TanStack Query):** Utiliza siempre TanStack Query (React Query) para manejar el estado del servidor, caché, reintentos y sincronización de datos. Define tus llamadas en una capa de servicios (`services/`) y consúmelas mediante hooks personalizados (por ejemplo, `useQuery` y `useMutation`).
- **Hook dedicado por consulta:** Toda consulta de datos debe realizarse a través de un hook personalizado y nunca llamarse directamente dentro del componente. Por ejemplo, en lugar de invocar `useQuery` directamente, define y utiliza un hook dedicado:
  ```ts
  const useStreakSnapshot = () => {
    return useQuery({
      queryKey: QK.STREAK_QUERY_KEY,
      queryFn: () => streakService.getSnapshot(),
    });
  };
  ```
- Define las llamadas en la capa de servicios (`services/`) y consúmelas mediante los hooks personalizados creados para este fin.
- Usarás el patrón repository para el acceso a datos y, para exportar cada clase de cada servicio, exportarás en ese fichero una instancia de esa clase para garantizar el patrón singleton.

## 5. Estilos y Componentes de Interfaz

- **Tailwind:** Utiliza clases de Tailwind para el diseño.
- **CSS Modules / estilos inline:** Úsalos únicamente como última opción cuando un caso de diseño específico o una animación compleja no puedan lograrse con Tailwind.

## 6. TypeScript

- Tipa fuertemente todas las propiedades (props) de los componentes, variables de estado y funciones.
- Evita el tipo `any`. Define interfaces o tipos claros para todos los modelos de datos y objetos del dominio.
