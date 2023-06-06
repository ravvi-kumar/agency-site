import { IBlog } from "@/types";

export const items: {
  applications: Omit<IBlog, "content">[];
  illustrations: Omit<IBlog, "content">[];
  websites: Omit<IBlog, "content">[];
} = {
  applications: [
    {
      _id: "1",
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      _id: "2",
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      _id: "3",
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
  illustrations: [
    {
      _id: "1",
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      _id: "2",
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      _id: "3",
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
  websites: [
    {
      _id: "1",
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      _id: "2",
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      _id: "3",
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      img: "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
};
