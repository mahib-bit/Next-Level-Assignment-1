const multiplyValue = (value: number, multiplier: number =2): number => {
    return value * multiplier;
};

const processInput = (value: number | string | boolean): number | string | boolean => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase()
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value? "Active" : "Inactive";
    }
}

const formatCoordinate = (coordinate: readonly [number, number, string]):number| string => {
    const[latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...array: T[][]): T[] =>{
    return array.flat();
}
