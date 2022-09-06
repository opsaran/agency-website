export default function Observers(node: Element | null) {
  if (node == null) return;

  const appearOptions: IntersectionObserverInit = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");

        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  appearOnScroll.observe(node);
}
