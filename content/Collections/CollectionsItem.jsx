import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion"
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import EditCollection from '@/components/Collection/EditCollection';

const CollectionsItem = ({
  collectionColor,
  collectionName,
  createdAt,
  hashID,
  taskFinished,
  totalTasks
}) => {
  const bgcolor = collectionColor || "#fa76a0"
  const totalTask = totalTasks || 0
  const taskdone = taskFinished || 0
  const title = collectionName || "General"

  // usestate hook calls
  const [isToggled, setIsToggled] = useState(false)
  const [isCollectionEditOpened, setIsCollectionEditOpened] = useState(false)

  return (
    <>
      <motion.div variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
        className="w-full h-44 rounded-3xl shadow-md bg-[#21212b] px-6 py-4 flex flex-col justify-between font-['poppins']"
      >

        <div className='flex justify-between'>
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl" style={{ background: bgcolor }}>{title.slice(0, 1).toUpperCase()}</div>

          <div className='text-xl cursor-pointer text-[#bababc] relative'>
            <div className='hover:text-white' onClick={() => setIsToggled(prev => !prev)}><BsThreeDots /></div>

            {isToggled &&
              <div className='absolute w-max top-6 left-0 bg-[#414051] rounded-md text-sm overflow-hidden'>
                <div className='hover:bg-blue-500 py-1 px-2' onClick={() => {
                  setIsCollectionEditOpened(prev => !prev)
                  setIsToggled(false)
                }}>Edit</div>

                <div className='hover:bg-violet-500 py-1 px-2 text-[13px]'>Add Favourite</div>
                <div className='hover:bg-red-500 py-1 px-2'>Delete</div>
              </div>}

          </div>

        </div>

        <div className="flex justify-between items-end">

          <div className="gap-2 flex flex-col">
            <div className="font-medium text-xl cursor-pointer line-clamp-1 text-ellipsis overflow-hidden max-w-[120px]" title={title}>{title}</div>
            <div className="text-[#bababc] text-sm">
              {taskdone}/{totalTask} done
            </div>
          </div>

          <CircularProgressbar
            value={taskdone * 100 / totalTask}
            className='!w-6 mb-2'
            strokeWidth={15}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: bgcolor,
              trailColor: '#33333f',
            })}
          />

        </div>

      </motion.div>

      {isCollectionEditOpened &&
        <EditCollection
          addedTitle={title}
          addedcolor={bgcolor}
          hash={hashID}
          onclick={setIsCollectionEditOpened}
        />
      }
    </>
  )
}

export default CollectionsItem