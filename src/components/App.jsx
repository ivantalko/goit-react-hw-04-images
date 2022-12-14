import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getGallery } from 'Helpers/Api';
import { Loaderspiner } from './Loader/loader';
import { Button } from './Button/Button';
import { ModalGallary } from './Modal/Modal';

export const App = () => {
  const [serchImageName, setSerchImageName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [bigImage, setBigImage] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  useEffect(() => {
    const getApi = async () => {
      if (page !== 1) {
        const data = await getGallery(serchImageName, page);
        setGallery(prevGallery => [...prevGallery, ...data.hits]);
        setIsLoading(false);
        setTotalHits(data.totalHits);
        return;
      }
      if (serchImageName) {
        setIsLoading(true);
        const data = await getGallery(serchImageName, page);
        setIsLoading(false);
        setGallery(data.hits);
        setTotalHits(data.totalHits);
      }
    };
    getApi();
  }, [page, serchImageName]);
  const handleFormSubmit = serchImageName => {
    setSerchImageName(serchImageName);
    setPage(1);
  };

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = largeImageURL => {
    if (!largeImageURL) {
      setBigImage('');
    } else {
      setBigImage(largeImageURL);
    }
  };
  return (
    <>
      <Searchbar onFormSubmit={handleFormSubmit} />
      {isLoading ? (
        <Loaderspiner />
      ) : (
        <ImageGallery
          gallery={gallery}
          bigImage={bigImage}
          toggleModal={toggleModal}
        />
      )}
      {totalHits > gallery.length && serchImageName && !isLoading && (
        <Button handleClick={handleClick} bigImage={bigImage} />
      )}
      {bigImage && (
        <ModalGallary toggleModal={toggleModal} largeImageURL={bigImage} />
      )}
    </>
  );
};
