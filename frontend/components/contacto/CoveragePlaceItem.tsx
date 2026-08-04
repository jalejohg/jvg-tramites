type CoveragePlaceItemProps = {
  name: string;
};

export default function CoveragePlaceItem({ name }: CoveragePlaceItemProps) {
  return (
    <li className="border-l-2 border-gold pl-3 text-sm text-ink text-pretty">
      {name}
    </li>
  );
}
