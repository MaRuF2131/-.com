import api from "./axios";


 export const updateView = async (id,database) => {
      try {

        await api.post("/user/views", {
        id:id,
        database:database
        });
        
      } catch (error) {
        console.log(error);
        
      }

  };