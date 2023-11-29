// class base style

// menu list
const menuListActive =
  'absolute top-0 right-0 w-screen h-screen bg-slate-800 transition-all overflow-hidden z-[998]';
const menuList =
  'absolute top-0 right-0 w-[100px] h-[100px] rounded-b-full rounded-s-full transition-all z-[998] overflow-hidden';

// hamburger button
const menuButtonActive =
  'active ham hamRotate ham8 z-[999] hover:rounded-full hover:bg-slate-700 transition-all';
const menuButton =
  'ham hamRotate ham8 z-[999] hover:rounded-full hover:bg-slate-100 transition-all';

// menu list item
const listItem =
  'py-5 md:py-10 text-2xl md:text-4xl hover:bg-slate-700 w-screen text-center hover:tracking-[.5rem] transition-all';

// list item active
const listItemActive =
  'flex h-screen justify-center items-center flex-col text-[#fbfbfb]';

export {
  menuList,
  menuListActive,
  menuButton,
  menuButtonActive,
  listItem,
  listItemActive,
};
