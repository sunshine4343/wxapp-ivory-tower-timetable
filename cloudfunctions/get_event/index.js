// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'timetable-81f1c'
})
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {

  return await db.collection('events')
  .aggregate().lookup({
    from: 'courses',
    localField: 'course_id',
    foreignField: '_id',
    as: 'courseName',
  })
  .match(
    {
      _openid: event._openid
    }
  )
  .sort({endDate: 1})
  .skip( event.eventCount)
  .limit(10)
  .end()
}