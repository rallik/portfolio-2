export const mergeJsonPhoto = (dataArr = [], photoArr = []) => {
    const combinedCards = [];

    for (let el = 0; el < dataArr.length; el++) {
        let dataArrElid = dataArr[el].cardimg?.img?.split(".")[0];
        combinedCards.push({
            ...dataArr[el],
            ...(photoArr.find((img) => img.base?.split(".")[0] === dataArrElid))
        });
    }
    
    return combinedCards;
}

