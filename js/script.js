// var boton = document.getElementById("boton");
// boton.addEventListener("click", mostrar);

particlesJS({
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 750
        }
      },
      "color": {
        "value": "#1f5b67"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#1f5b67"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7776548495197786,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#1f5b67",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });










function mostrarB(){
    Swal.fire({
        // title: "Bienvenido",
        text: "Añadido al carrito",
        // html:
        icon: "success",
        // confirmButtonText: "ACEPTAR"
        // footer:
        // width:
        // padding:
        // background: "#000",
        // grow:
        // backdrop:
        timer: 2000,
        // timerProgressBar:
        // toast:
        // position: "top",
        // allowOutsideClick:
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
    
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        showConfirmButton: true
        // confirmButtonColor:
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        // imageUrl: "https://k10.kn3.net/170E60282.jpg"
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });
}

VanillaTilt.init(document.querySelectorAll(".articulo"), {
    max: 20,
    speed: 400
});
VanillaTilt.init(document.querySelector(".btn"), {
    max: 20,
    speed: 400
});