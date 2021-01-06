
export const INIT_NUM = 6;
export const NUM_OF_SEQ = 4;

export const rendNumber = () => Math.floor(Math.random() * Math.floor(NUM_OF_SEQ));

export const seqInit = (level: number = 0) => {
    let seq = [];
    for (let i = 0; i < INIT_NUM + level; i++) {
      seq[i] = rendNumber();
    }
    return seq;
}
