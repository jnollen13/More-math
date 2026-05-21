/**
 * adds useful math things
 */
//% weight=90 icon="\uf12c"
namespace moreMath {

    /**
     * calculates the slope of a line off of 2 points in decimal form
     */
    //% blockId=slope
    //% block="slope x1: $x1 y1: $y1 x2: $x2 y2: $y2"
    export function slope(x1: number, y1: number, x2: number, y2: number): number {
        let y = y2 - y1
        let x = x2 - x1
        let result = y / x
        return result
    }

    /**
     * does exponents
     * @param num the number the exponet gets aplied to
     * @param exponent the exponent
     */
    //% blockId=exponent
    //% block="$num with exponent $exponent"
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
    //% blockId=scientificNotation
    //% block="scientific Notation of $num"
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
    export function lengthOf(n:number): number {
        let result = n.toString().replaceAll(".", "").replaceAll("*", "")
        .replaceAll("-","").replaceAll("+", "").replaceAll("=", "").length
        return result;
    }

    /**
     * get the value of y at x with formula y=mx+b
     */
    //% blockId=slopePointAtX
    //% block="y=$m $x + $b"
    export function slopePointAtX(m:number,b:number, x:number): number {
        let y = m*x+b;
        return y;
    }

    /**
     * get the value of y at x with formula y=mx+b
     */
    //% blockId=slopeToDecimal
    //% block="get decimal slope of $rise over $run"
    export function slopetodecimal(rise:number,run:number): number {
        rise=Math.trunc(rise)
        run=Math.trunc(run)
        let result = rise/run
        return result;
    }

    /**
     * multiplies a number by a fraction
     */
    //% blockId=multiplyByFraction
    //% block="mutlipy by fraction $nomenator / $denomenator x $toMultiply"
    export function multiplyByFraction(nomenator: number, denomenator: number, toMultiply: number): number {
        let root = toMultiply / denomenator;
        let result = root * nomenator
        return result;
    }

    /**
     * does geometric sequences
     */
    //% blockId=geometricSequences
    //% block="start at $startingNumber location: $n ratio: $r"
    export function geometricSequences(startingNumber: number, n: number,r:number): number {
        let multiplier = startingNumber
        for (let i = 0; i < n; i++) {
            multiplier *= r
        }
        if (n == 0) {
            return startingNumber;
        } else {
            return multiplier;
        }
    }
}