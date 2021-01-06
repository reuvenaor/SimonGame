
const INIT_NUM = 6;
const NUM_OF_SEQ = 4;

export function Sequence (this: any) {
  this.seq = [];
  this.rendNumber = () => Math.floor(Math.random() * Math.floor(NUM_OF_SEQ));

  this.seqInit = () => {
    this.seq = [];
    for (let i = 0; i < INIT_NUM; i++) {
      this.seq[i] = this.rendNumber();
    }
    return this.seq;
  }

  this.addSeq = () => {
    this.seq = [...this.seq, this.rendNumber()];
    return this.seq; 
  };
}