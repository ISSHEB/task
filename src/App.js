import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setCardSlice } from "./redux/Slice/CardSlice";
import CartInfo from "./componenst/CartInfo/CartInfo.jsx";
import Item from './json/Item.json'
import Modal from './componenst/Modal/Modal.jsx'

function App() {
  const dispatch = useDispatch();

  const card = useSelector((state) => state);

  const [stop, setStop] = useState(0);

  const [selectedCard, setSelectedCard] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [actionItem, setActionItem] = useState(null);

  const handleLoadMore = () => {
    setItemsPerPage((prevItemsPerPage) => prevItemsPerPage + 4);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`https://layout.solvintech.ru/nuxt/api`);
  //     axios.request({
  //       method: 'GET',
  //       url: `https://layout.solvintech.ru/nuxt/api`,
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //       crossdomain: true,
  //       proxy: {
  //         host: '43.157.105.92',
  //         port: 8888
  //       }
  //     })
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //     dispatch(setCardSlice(res.data));
      
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    

    if (stop < 10) {
      setStop(stop + 1);
    }
  }, [stop]);
  

  const openModal = (card) => {
    setSelectedCard(card);
    setActionItem(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="App">
      {selectedCard && (
        <Modal
          {...actionItem}
          closeModal={closeModal}
          id={actionItem.id}
          name={actionItem.name}
          email={actionItem.email}
          about={actionItem.about}
          phone={actionItem.phone}
          picture={actionItem.picture}
        />
      )}
      <div className="app_block">
        <div className="app_block_div">
          {/* Render cards */}
          {Item.slice(0, itemsPerPage).map((info, id) => {
            return (
              <CartInfo

                key={id}
                info={info}
                openModal={openModal}
                name={info.name}
                email={info.email}
                picture={info.picture}
              />
            );
          })}
        </div>
        <button onClick={handleLoadMore}>Load more</button>
      </div>
      

      
    </div>
  );
}

export default App;
