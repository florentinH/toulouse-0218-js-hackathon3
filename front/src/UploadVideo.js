import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import youtube from './youtube.json'
import parseQuery from './parseQuery'
import MediaUploader from './MediaUploader'
import LinearProgress from '@material-ui/core/LinearProgress'

const SIZE = 1000000
class UploadVideo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      accessToken: '',
      done: 0,
      size: 0,
      percent: 0
    }
    this.startUpload = this.startUpload.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.onComplete = this.onComplete.bind(this)
  }
  onProgress (e) {
    let done = this.state.done
    if (e.loaded === SIZE) {
      done += SIZE
    }
    this.setState({
      done,
      percent: 100 * done / this.state.size
    })
  }
  onComplete () {
    this.setState({
      percent: 100
    })
  }
  startUpload () {
    const {file} = this.props
    const {accessToken} = this.state
    const chunkSize = SIZE
    const option = {
      params: {
        uploadType: 'resumable',
        part: 'snippet,status,contentDetails'
      },
      file, token: accessToken, chunkSize, 
      onProgress: this.onProgress,
      onComplete: this.onComplete
    }
    const uploader = new MediaUploader(option)
    uploader.upload()
    this.setState({
      size: file.size
    })
  }
  componentDidMount () {
    if (window.location.hash.length === 0) {
      return
    }
    const accessToken = parseQuery(window.location.hash.substr(1)).access_token
    const baseUrl = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token='
    axios.get(baseUrl + accessToken)
      .then(() => {
        this.setState({
          accessToken
        })
      })
  }
  render () {
    return (
      <div>
        <form action="https://accounts.google.com/o/oauth2/v2/auth">
          <input type="hidden" name="response_type" value="token" />
          <input type="hidden" name="scope" value="https://www.googleapis.com/auth/youtube.force-ssl" />
          <input type="hidden" name="include_granted_scopes" value="true" />
          <input type="hidden" name="state" value="pass-through value" />
          <input type="hidden" name="client_id" value={youtube.client_id} />
          <input type="hidden" name="redirect_uri" value={youtube.redirect_uris[0]} />
          <input type="submit" value="submit" />
        </form>
        <LinearProgress variant="determinate" value={this.state.percent} />
        <Button onClick={this.startUpload}
          style={{color: 'white',
            backgroundColor: '#1313E6',
            marginTop: 5
          }}>Upload</Button>
      </div>
    )
  }
}

export default UploadVideo
