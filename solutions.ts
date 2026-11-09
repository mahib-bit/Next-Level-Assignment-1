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
