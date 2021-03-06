const app = require('../app')
const prefix = require('../../config')
const { jsonpMethod2, jsonpMethod1 } = require('./utils')
const config = require('./config')
const expect = require('chai').expect
const supertest = require('supertest')
const request = supertest(app)

const timeoutSet = 150000

describe('pc 页接口', () => {
  it('/getPlaylist-首页推荐页接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getPlaylist').query(config.getPlaylist)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
})

describe('mobile 页接口', function () {
  it('/getDiscList-首页加载推荐列表接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getDiscList').query(config.getDiscList)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getRecomList-首页上面广告加载接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getRecomList').query(config.getRecomList)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getHotSingers-获取热门歌手接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getHotSingers').query(config.getHotSingers)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getDiscSongs-获取推荐歌单中歌曲接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getDiscSongs').query(config.getDiscSongs)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getDiscSongs-获取推荐歌单中歌曲接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getDiscSongs').query(config.getDiscSongs)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getSingerSongs-获取歌手歌曲接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getSingerSongs').query(config.getSingerSongs)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getTopList-获取榜单列表接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getTopList').query(config.getTopList)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getTopListSongs-获取榜单歌曲列表接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getTopListSongs').query(config.getTopListSongs)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/getHotKey-获取热门搜索词接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/getHotKey').query(config.getHotKey)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
  it('/lyric-获取歌词接口测试', function (done) {
    this.timeout(timeoutSet);
    request.get(prefix + '/lyric').query(config.lyric)
    .expect(200).end((err, res) => {
      const ret = jsonpMethod2(err, res)
      expect(ret.code).to.equal(0)
      done()
    })
  })
})
