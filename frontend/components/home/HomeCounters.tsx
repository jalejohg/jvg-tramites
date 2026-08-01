import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { COUNTERS } from "@/data/content";

function CounterItem({
  item,
  index,
}: {
  item: (typeof COUNTERS)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8 first:md:border-l-0 first:md:pl-0">
        <p className="font-serif text-3xl font-medium text-ink md:text-4xl">
          {item.value}
        </p>
        <p className="mt-2 text-sm font-medium text-muted">{item.label}</p>
        {item.provisional && (
          <p className="mt-2 text-[0.65rem] uppercase tracking-wider text-muted/60">
            provisional
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function HomeCounters() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTERS.map((item, i) => (
            <CounterItem key={item.label} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
