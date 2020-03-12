import fetch from 'isomorphic-unfetch'

import { API_ENDPOINT, API_KEY, SERVER_ENDPOINT } from '~/constants';
import { isValidSize } from '~/utils/utils';

export const fetcher = async (url = null, options = {}) => {
    if (!url) {
        console.error('fetcher: no url provided');
        return {};
    }

    const res = await fetch(url, options)
    const data = await res.json()

    if (data.error && res) {
      res.statusCode = 404;
    }

    return data;
}

/* Urls */

export const getSearchBySizeUrl = (props) => {
    if (!isValidSize(props)) return null;

    const { width, ratio, rim } = props;

    return `${API_ENDPOINT}/catalog_data/${API_KEY}?width=${width}&ratio=${ratio}&rim=${rim}`;
}

export const getWidthListUrl = () => {
    return `${API_ENDPOINT}/width/${API_KEY}`;
}

export const getRatioListUrl = (width) => {
    return `${API_ENDPOINT}/ratio/${width}/${API_KEY}`;
}

export const getRimListUrl = (props) => {
    const { width, ratio } = props;

    return `${API_ENDPOINT}/rim/${width}/${ratio}/${API_KEY}`;
}

export const getTireSizesUrl = (props) => {
    if (!isValidSize(props)) return null;

    const { width, ratio, rim } = props;

    return `${SERVER_ENDPOINT}/getTireSizes?width=${width}&ratio=${ratio}&rim=${rim}`;
}

export const getHeroImagesUrl = () => {
    return `${SERVER_ENDPOINT}/getHeroImages`;
}

export const getAboutContentUrl = (locale) => {
    return `${SERVER_ENDPOINT}/getAboutContents?locale=${locale}`;
}

/* API Calls */

export const getTireSizes = async (props) => {
    if (!isValidSize(props)) return { error: 'Somethign went wrong with the props.', status: 500 };
    
    const url = getTireSizesUrl(props);
    return await fetcher(url);
}

export const getSeoRoutes = async (url_slug) => {
    const url = `${SERVER_ENDPOINT}/getSeoRoutes?url_slug=/${url_slug}`;
    return await fetcher(url);
}

export const getWidthList = async () => {
    // const url = getWidthListUrl();
    const url = `${SERVER_ENDPOINT}/getWidthList`;
    return await fetcher(url);
}

export const getRatioList = async (width) => {
    // const url = getRatioListUrl(width);
    const url = `${SERVER_ENDPOINT}/getRatioList?width=${width}`;
    return await fetcher(url);
}

export const getRimList = async (props) => {
    // const url = getRimListUrl(props);
    const url = `${SERVER_ENDPOINT}/getRimList?width=${props.width}&ratio=${props.ratio}`;
    return await fetcher(url);
}

export const getHeroImages = async () => {
    const url = getHeroImagesUrl();
    return await fetcher(url);
}

export const getAboutContents = async (locale) => {
    const url = getAboutContentUrl(locale);
    return await fetcher(url);
}


export const getOptimizelyObject = async (url) => {
    return await fetcher(url);
}
