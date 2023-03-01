import React, {useEffect, useState} from "react";
import { TimeoutWarningModal } from "./TimeoutWarningModel";
import { addEventListeners } from "./evenListenerUtil";
import { removeEventListeners } from "./evenListenerUtil";


export const TimeoutLogic = () => { 
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  useEffect(() => {
    const createTimeout1 = () => setTimeout(()=>{ 
      setWarningModalOpen(true);
    },1000000)

    const createTimeout2 = () => setTimeout(() => {
      // Implement a sign out function here
      window.location.href = '/admin-login'
    },10000)

    const listener = () => {
      if(!isWarningModalOpen){
        clearTimeout(timeout)
        timeout = createTimeout1();
      }
    } 

    // Initialization
    let timeout = isWarningModalOpen  ? createTimeout2() : createTimeout1()
    addEventListeners(listener);

    // Cleanup
    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    }
  },[isWarningModalOpen])
  return (
    <div>
      {isWarningModalOpen && (
        <TimeoutWarningModal 
          isOpen={isWarningModalOpen}
          onRequestClose={() => setWarningModalOpen(false)}
        />
        )
      }
    </div>
  ) 
}