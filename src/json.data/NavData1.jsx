 
 import {
  FaVideo,
  FaCameraRetro,
  FaLink,
  FaBook,
  FaNewspaper,
  FaArchive,
  FaTable,
  FaLanguage,
  FaThumbsUp,
} from "react-icons/fa";
import SocialPopUp from "@/ui/SocialPopUp";

 export const NavData1 ={
    "আজকের পত্রিকা":{
        "link":"/ajkerpatrika",
        "name":"আজকের পত্রিকা",
        "icon":<FaTable/>,
        "popup":false
    },
    "ই-পেপার":{
        "link":"/online-epaper",
        "name":"ই-পেপার",
        "icon":<FaNewspaper/>,
        "popup":false
    },
    "ম্যাগাজিন":{
        "link":"/ajkerpatrika",
        "name":"ম্যাগাজিন",
        "icon":<FaBook/>,
        "popup":true
    },
    "আর্কাইভ":{
        "link":"/archive",
        "name":"আর্কাইভ",
        "icon":<FaArchive/>,
        "popup":false
    },
    "সোশ্যাল মিডিয়া":{
        "link":"/social-media",
        "name":"সোশ্যাল মিডিয়া",
        "icon":<FaThumbsUp/>,
        "popup":<SocialPopUp/>
    },
    "বাংলা কনভার্টার":{
        "link":"/converter",
        "name":"বাংলা কনভার্টার",
        "icon":<FaLink/>,
        "popup":false
    },
 }