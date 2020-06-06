import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import './CollectItems.css';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Props {
  items: Item[];
  selectedItems: number[];
  handleSelectItem: (itemId: number) => void;
}

const CollectItems: React.FC<Props> = (props) => {
  const [countImagesLoading, setCountImagesLoading] = useState(0);

  return (
    <fieldset>
      <legend>
        <h2>Itens de coleta</h2>
        <span>Selecione um ou mais itens abaixo</span>
      </legend>

      <ul
        className={
          countImagesLoading === props.items.length
            ? 'items-grid'
            : 'items-grid-hidden'
        }
      >
        {props.items.map((item) => (
          <li
            key={item.id}
            onClick={() => props.handleSelectItem(item.id)}
            className={props.selectedItems.includes(item.id) ? 'selected' : ''}
          >
            <img
              // style={{ width: '120px' }}
              src={item.image_url}
              alt="Test"
              onLoad={() => {
                // https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
                console.log(countImagesLoading);
                setCountImagesLoading(countImagesLoading + 1);
                console.log(countImagesLoading);
              }}
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      {countImagesLoading < props.items.length ? (
        <div className="loading">
          <Loader
            type="TailSpin"
            // color="#00BFFF"
            color="#34cb79"
            // 34cb79
            height={100}
            width={100}
          ></Loader>
        </div>
      ) : null}
    </fieldset>
  );
};

export default CollectItems;
