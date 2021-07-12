import myAxios from './API';

export const allList = () => {
    return myAxios.get('visits')
}