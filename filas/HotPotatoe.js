function hotPotatoe(nameList, num) {
  let queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the Hot Potatoe game.')
  }

  return queue.dequeue()
}