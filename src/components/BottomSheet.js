import style from '../style/bottomSheet.module.css';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet/lib/SwipeableBottomSheet";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

const BottomSheet = ({cardDetail, sheetVisible, setSheetVisible, setItemsVisible, sheetTitle, setSheetCreateRoom}) => {
  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible);
        setItemsVisible(true);
      }}
      fullScreen={sheetTitle === 'room detail'}
    >
      <div
        className={style.bottom_sheet_container}
        style={{backgroundColor: sheetTitle === 'profile' ? 'transparent' : ''}}
      >
        {sheetTitle === 'new room' ? (
          <NewRoom
            cardDetail={cardDetail}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : sheetTitle === 'start room' ? (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : (
          ''
        )}
      </div>
    </SwipeableBottomSheet>
  );
};

export default BottomSheet;
