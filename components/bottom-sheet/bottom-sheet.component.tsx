import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import bottomSheetStyles from "./bottom-sheet.module.scss";

import { useClip } from "@/hooks/clip";

interface BottomSheetProps {
  dismissible: boolean;
  id: string;
  onChange: (value: boolean) => void;
  persistent: boolean;
  value: boolean;
}

const BottomSheet: FC<Partial<BottomSheetProps>> = ({ children, ...props }) => {
  const { clipHtml, removeClipHtml } = useClip();

  useEffect(() => {
    if (props.value) {
      clipHtml();
      return;
    }

    removeClipHtml();
  }, [props.value]);

  function handleBackgroundClick() {
    if (props.persistent) return;
    props.onChange?.(false);
  }

  if (!props.value) return null;

  return (
    <div
      className={bottomSheetStyles["BottomSheet"]}
      onClick={handleBackgroundClick}
    >
      <div className={bottomSheetStyles["BottomSheet-container"]}>
        <div
          className={bottomSheetStyles["BottomSheet-dialog"]}
          onClick={(event) => event.stopPropagation()}
        >
          {props.dismissible && (
            <button
              className={bottomSheetStyles["BottomSheet-close"]}
              aria-label="Close Bottom Sheet"
              type="button"
            >
              <FontAwesomeIcon icon="times" />
            </button>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

BottomSheet.defaultProps = {
  dismissible: false,
  id: "",
  onChange: undefined,
  persistent: false,
  value: false,
};

export default BottomSheet;
