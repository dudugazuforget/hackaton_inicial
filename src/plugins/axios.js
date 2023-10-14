import axios from 'axios'


export default {
    data() {
      return {
        apiKey: 'ot5Ty1RCrCepNZQbcWmus33CbKktwquSsGetGh7iPAXgTSum4NrTkcvg5Ju86aQZ', 
        origin: (''), 
        destination: ('')
      };
    },
    methods: {
      async getDistanceMatrix() {
        try {
          const response = await axios.get('https://api.distancematrix.ai/v1/distancematrix', {
            params: {
              key: this.apiKey,
              origins: this.origin,
              destinations: this.destination
            }
          });
  
          const data = response.data;
          // Faça algo com os dados da matriz de distância (data) aqui
  
          console.log(data);
        } catch (error) {
          // Lide com erros aqui
          console.error('Erro ao obter matriz de distância:', error);
        }
      }
    },
    mounted() {
      this.getDistanceMatrix();
    }
  };