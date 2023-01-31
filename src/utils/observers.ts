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

const TextAppearOptions: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};

export function TextObservers(node: Element | null) {
  if (node == null) return;
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        if (entry.target.textContent == null) return;
        const strText = entry.target.textContent;
        const splitText = strText.split("");
        node.textContent = "";
        for (let i = 0; i < splitText.length; i++) {
          node.innerHTML += "<span>" + splitText[i] + "</span>";
        }

        let char = 0;
        const onTick = () => {
          const span = entry.target.children[char];
          span.classList.add("text-fade");
          char++;
          if (char === splitText.length) {
            complete();
            return;
          }
        };

        let timer = setInterval(onTick, 50);
        const complete = () => {
          clearInterval(timer);
        };
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  TextAppearOptions);

  appearOnScroll.observe(node);
}
