import axios from "axios";

let state = window.localStorage.getItem('selectApi') ? window.localStorage.getItem('selectApi') : "1";

export const apiKeys = [
    // kkp785216@gmail.com
    'AIzaSyCO43SCw8o4VrTC72M0wdgr8Sshov4-sZI',

    // kanhaiya277502@gmail.com
    'AIzaSyDo_0YDdRQ38vbVQ19Ng8bAHhRaNvyj_1s',
    'AIzaSyAblinAxL4_M8EW2EZdeFVyiNV238ioFAY',
    'AIzaSyDNZBDmYooRfOzZI31DvFh2GGrcoxuWNXw',
    'AIzaSyDeEu_SyZRpCY52pZv5AMkNLVMSl-BY5pE',
    'AIzaSyBM75GfcrEbkNqXDHJ99TtVwqtwMp9R62s',
    'AIzaSyDNNC7tbd8qj0oXl2Qzo3SJpWFXCyuiznc',
    'AIzaSyAMdROKeeHU7tf4tRN-IU8Sl5HLowoQgf4',
    'AIzaSyAkpSUobS1_L2FztkyQ_2YM1kHobjv09CQ',
    'AIzaSyClu2V_22XpCG2GTe1euD35_Mh5bn4eTjA',
    'AIzaSyBEYvM_RY7lpHVFTLsDAYdQWsz32_1Unks',
    'AIzaSyDDDsuY_YsV635V4QZFKkGwEEkQXMCmh94',
]
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    headers: {},
    params: {
        key: apiKeys[parseInt(state) - 1]
        // key: apiKeys[25]
    }
});

export const searchreq = axios.create({
    baseURL: "https://youtube-clone-backend.vercel.app",
    headers: {},
    params: {}
});

export default request;
