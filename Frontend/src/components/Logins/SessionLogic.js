import React, {useEffect, useState} from "react";
import { SessionWarningModel } from "./SessionWarningModel";
import { addEventListeners } from "./evenListenerUtil";
import { removeEventListeners } from "./evenListenerUtil";


export const SessionLogic = () => { 
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  useEffect(() => {
    const createTimeout1 = () => setTimeout(()=>{ 
      setWarningModalOpen(true);
    },10000)

    const createTimeout2 = () => setTimeout(() => {
      // Implement a sign out function here
      window.location.href = '/employee-login'
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
        <SessionWarningModel 
          isOpen={isWarningModalOpen}
          onRequestClose={() => setWarningModalOpen(false)}
        />
        )
      }
    </div>
  ) 
}