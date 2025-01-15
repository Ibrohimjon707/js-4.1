
alert("Sizda hozir random sonlar chiqishni boshlaydi")
let random = Math.random() * 100;
let round = Math.round(random);
alert(`Sizda hozir random son: ${round}`);
alert(`Random orqali chiqqan son: ${round} edi \n biz uni 2 ga kopaytirib ${round * 2} ni chiqardik \n biz uni 2 ga bolib ${round / 2} ni chiqardik \n va shu sonni 3 ga bolgandagi qoldiq ${round % 3} ni chiqardi`)