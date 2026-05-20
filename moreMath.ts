/**
 * adds useful math things
 */
//% weight=90 icon="\uf12c"
namespace moreMath {

    /**
     * calculates the slope of a line off of 2 points in decimal form
     */
    //% block
    export function slope(x1: number, y1: number, x2: number, y2: number): number {
        let y = y2 - y1
        let x = x2 - x1
        let result = y / x
        return result
    }

    /**
     * does exponents
     */
    //% block
    export function exponent(num:number,exponent:number): number{  
        let multiplier = num
        for (let i = 0; i < exponent-1; i++) {
            multiplier*=num
        }
        if(exponent==0){
            return 0
        }else{
        return multiplier;
        }
    }

    /**
     * converts a number to scientificNotation
     * WARING: rounds a little bit
     */
    //% block
    export function scientificNotation(num: number): string {
        let workingNum = Math.trunc(num)
        let multiplier = 0
        while (workingNum>=10||workingNum<=-10) {
            multiplier+=1
            workingNum/=10
        }
        workingNum*=10000000
        workingNum = Math.round(workingNum)
        workingNum/=10000000
        if(multiplier!=0){
            if(multiplier==1||multiplier==-1){
                    return workingNum+"*10"
            }else{
                return workingNum+"*10E"+multiplier;
            }
        }else{
            return workingNum.toString();
        }
    }

    /**
     * gets the length of a number
     */
    //% block
    export function length(n:number): number {
        let result = n.toString().replaceAll(".", "").replaceAll("-","").length
        return result;
    }

    /**
     * get the value of y at x with formula y=mx+b
     */
    //% block
    export function slopePointAtX(m:number,b:number, x:number): number {
        let y = m*x+b;
        let result=y
        return result;
    }

    /**
     * get the value of y at x with formula y=mx+b
     */
    //% block
    export function slopetodecimal(rise:number,run:number): number {
        rise=Math.trunc(rise)
        run=Math.trunc(run)
        let result = rise/run
        return result;
    }
}