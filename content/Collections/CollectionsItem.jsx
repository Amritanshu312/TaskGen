import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion"

const CollectionsItem = () => {
  const bgcolor = "#fa76a0"
  const totalTask = 6
  const taskdone = 3
  const title = "school is the best plae  to study you know"

  return (
    <motion.div variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
      className="w-full h-44 rounded-3xl shadow-md bg-[#21212b] px-6 py-4 flex flex-col justify-between font-['poppins']"
    >

      <div className={`bg-[${bgcolor}] w-11 h-11 rounded-2xl flex items-center justify-center text-xl`}>S</div>

      <div className="flex justify-between items-end">

        <div className="gap-2 flex flex-col">
          <div className="font-medium text-xl cursor-pointer line-clamp-1 text-ellipsis overflow-hidden max-w-[120px]" title={title}>{title}</div>
          <div className="text-[#bababc] text-sm">{taskdone}/{totalTask} done</div>
        </div>

        <CircularProgressbar value={taskdone * 100 / totalTask} className='!w-6 mb-2' strokeWidth={15} styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: bgcolor,
          trailColor: '#33333f',
        })}
        />

      </div>

    </motion.div>
  )
}

export default CollectionsItem