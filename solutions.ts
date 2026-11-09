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

interface Course {
    title :string;
    students :number;
    isPublished : boolean;
}

const getPopularCourses =(courses: Course[], minStudents: number) => {
    return courses.filter(course => {
        return course.isPublished === true && course.students >= minStudents;
    })
}

const pluckValues = <T,K extends keyof T >(items: T[], key: K): T[K][] => {
    const result: T[K][] = [];

    for (const item of items ) {
        result.push(item[key]);
    }
    return result
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
