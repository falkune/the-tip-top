import React from 'react'

export default function ErrorMessage({errorMessage}) {
  return (
    <p style={styles.text}>{errorMessage}</p>
  )
}

const styles = {
  text: {
    color: "#e63946"
  }
}