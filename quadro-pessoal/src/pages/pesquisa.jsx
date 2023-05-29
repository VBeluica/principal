import React from "react";
import Box from '@mui/material/Box';
import Tabela from "../components/identificacao";
import Cargo from "../components/cargo";

const Pesquisa= () => {
    return (
      <div>
           <Box
        sx={{
         
            position: 'absolute',
            width: '1005px',
            height: '627px',
            background: 'rgba(159, 159, 159, 0.09)',
            textAlign: 'center',
            left: '18%',
            top: '10%',
            justifyContent: 'space-between'
        }}
      />

      <Tabela/>
      <Cargo/>
         </div>
    );
  }
  
  export default Pesquisa;
  