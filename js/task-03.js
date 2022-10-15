const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUlRef = document.querySelector('.gallery')

const picturesRef = image => {
  const { url, alt } = image;
  return `
    <li class="gallery-element">
      <img class="gallery-img" src="${url}" alt="${alt}" width=640px  height= 410px>
    </li>
  `;
};

const insertedPicsRef = images
  .map(picturesRef)
  .join('');
galleryUlRef.insertAdjacentHTML('afterbegin', insertedPicsRef);

console.log(galleryUlRef);