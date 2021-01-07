
export const INIT_NUM = 4;
export const NUM_OF_SEQ = 4;

export const rendNumber = () => Math.floor(Math.random() * Math.floor(NUM_OF_SEQ));

export const seqInit = (level: number = 0) => {
    let seq = [];
    const size = (INIT_NUM + level) * 2;
    for (let i = 0; i < size; i++) {
      seq[i] = i % 2 ? -1 : rendNumber();
    }
    return seq;
}
