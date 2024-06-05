interface Blog {
  // readonly chai ek choti assign vayesi change garna mildaina
  readonly id: number;
  title: string;
  text: string;
}
interface Blog {
  // we can use ? to make optional
  isPublished?: boolean;
}

let blog: Blog = {
  id: 1,
  title: "title1",
  text: "text1",
  isPublished: true,
};

// interface chai hamile override ra reopen garna milxa

// typescript ko config file use garna
//  tsc -- init
// tsc - watch
