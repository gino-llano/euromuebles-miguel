import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

function Banner() {
  const titles = [
    "Fabricación de estantes para botica",
    "Construcción de muebles para el hogar",
    "Instalación de ventanas con cancelación de ruido"
  ]
  const [title, setTitle] = useState(0);

  const swipe = (direction) => {

    if (direction == "left") {
      if (title == 0)
        setTitle(titles.length - 1);
      else
        setTitle(title - 1);
    }
    if (direction == "right") {
      if (title == titles.length - 1)
        setTitle(0);
      else
        setTitle(title + 1);
    }

  } 

  return (
    <div id='banner' style={{
      backgroundImage: "url('./banner/" + (title+1).toString() + ".jpg')"
    }}>
      <div className="button" onClick={() => swipe("left")}>
        <ChevronLeftIcon
          sx={{
            width: "32px",
            height: "32px",
            filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 1))",
          }}/>
      </div>
      <div id='title'>
        {titles[title]}
      </div>
      <div className="button" onClick={() => swipe("right")}>
        <ChevronRightIcon
        sx={{
          width: "32px",
          height: "32px",
          filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 1))",
        }}/>
      </div>
    </div>
  )

}

export default Banner;