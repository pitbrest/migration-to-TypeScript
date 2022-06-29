import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bd391db74eb24a97ad6550905895e5a9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
