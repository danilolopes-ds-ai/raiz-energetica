import React from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = ({ calLink }) => {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"styles":{"branding":{"brandColor":"#2D8C5C"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal calLink={calLink} style={{width:"100%",height:"100%",overflow:"scroll"}} />;
};

export default CalEmbed;