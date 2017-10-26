/**
 * Created by shishitengteng on 2017/10/16.
 */
const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  organizeId: state => state.mine.organizeId  // 所有组织
}
export default getters
