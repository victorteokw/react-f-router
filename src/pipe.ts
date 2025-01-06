type Pipe = {
  <T0>(input: T0): T0
  <T0, T1>(input: T0, t1: (input: T0) => T1): T1
  <T0, T1, T2>(input: T0, t1: (input: T0) => T1, t2: (input: T1) => T2): T2
  <T0, T1, T2, T3>(input: T0, t1: (input: T0) => T1, t2: (input: T1) => T2, t3: (input: T2) => T3): T3
  <T0, T1, T2, T3, T4>(input: T0, t1: (input: T0) => T1, t2: (input: T1) => T2, t3: (input: T2) => T3, t4: (input: T3) => T4): T4
  <T0, T1, T2, T3, T4, T5>(input: T0, t1: (input: T0) => T1, t2: (input: T1) => T2, t3: (input: T2) => T3, t4: (input: T3) => T4, t5: (input: T4) => T5): T5
}

export const pipe: Pipe = (initial: any, ...fns: ((i: any) => any)[]) => {
  return fns.reduce((acc, fn) => fn(acc), initial)
}
