
export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cheesey Style",
      price: 500,
      imagesUrl: "https://th.bing.com/th/id/OIP.yKn1kddDgNTMZ6VEhgLzZAHaHa?w=736&h=736&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Bacon Lover",
      price: 450, // Number format
      imagesUrl: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS.jpg",
    },
    {
      id: 3,
      name: "Family Burger",
      price: 750, // Number format
      imagesUrl: "https://th.bing.com/th/id/OIP.mh7KJf1ggEVnsvya18NE_AHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
    },
  ];
  res.status(200).json(products);
}
