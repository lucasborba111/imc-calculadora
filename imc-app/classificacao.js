const classificarIMC = (valorImc) => {  
    switch (true) {
      case valorImc < 18.5:
        return'Magro';
      case valorImc >= 18.5 && valorImc < 25:
        return 'Normal';
      case valorImc >= 25 && valorImc < 30:
        return 'Sobrepeso';
      default:
        return 'Obeso';
    }  
};

export default classificarIMC;