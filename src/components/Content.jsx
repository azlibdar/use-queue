import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueue } from "react-customs";

function Content() {
  const { queue, enqueue, dequeue, peek, size, clear, isEmpty, isFull } = useQueue([], { maxSize: 10 });

  const addToQueue = () => {
    enqueue(Math.floor(Math.random() * 1000));
  };

  const removeFromQueue = () => {
    const removedItem = dequeue();

    toast(`Removed Item: ${removedItem}`, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const peekQueue = () => {
    toast(`Peek Item: ${peek()}`, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const clearQueue = () => {
    clear();

    toast("Queue Cleared!", {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const isQueueFull = () => {
    const message = isFull ? "Yep, it's full" : "Not yet!";

    toast(message, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const isQueueEmpty = () => {
    const message = isEmpty ? "Yep, it's empty" : `Nope!`;

    toast(message, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <ToastContainer />
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6 flex flex-col gap-12">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={addToQueue} className="btn btn-1">
              Enqueue
            </button>
            <button onClick={removeFromQueue} className="btn btn-2">
              Dequeue
            </button>
            <button onClick={peekQueue} className="btn btn-3">
              Peek
            </button>
            <button onClick={clearQueue} className="btn btn-4">
              Clear
            </button>
            <button onClick={isQueueFull} className="btn btn-5">
              isFull
            </button>
            <button onClick={isQueueEmpty} className="btn btn-6">
              isEmpty
            </button>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center items-center">
              <span className="text-center px-2 py-1 text-sm font-mono bg-zinc-800 font-semibold text-zinc-400 rounded-md">
                Queue size: {size}
              </span>
            </div>
            {queue.length !== 0 && (
              <ul className="w-full flex flex-col gap-2 mt-6">
                {queue.map((item, index) => (
                  <li key={index} className="w-full p-4 bg-zinc-900 rounded-lg text-zinc-400 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
