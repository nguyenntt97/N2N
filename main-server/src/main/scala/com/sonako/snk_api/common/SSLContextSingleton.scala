package com.sonako.snk_api.common

import java.security.KeyStore

import com.twitter.finagle.ssl.KeyCredentials.KeyManagerFactory
import javax.net.ssl
import javax.net.ssl.{SSLContext, TrustManagerFactory}

object SSLContextSingleton {
    final val classLoader = this.getClass.getClassLoader
    def getSSLContext: SSLContext = {
        val passphrase = "elKINO@2511".toCharArray()
        val trustPassphrase = "elKINO@2511".toCharArray()
        
        val ksKeys = KeyStore.getInstance("JKS")
        val keyStoreResrc = classLoader.getResourceAsStream("server.jks")
        ksKeys.load(keyStoreResrc, passphrase)
        
        val ksTrust = KeyStore.getInstance("JKS")
        val trustStoreResrc = classLoader.getResourceAsStream("server.jks")
        ksTrust.load(trustStoreResrc, trustPassphrase)
        
        // KeyManager decide which key material to use
        val kmf = ssl.KeyManagerFactory.getInstance("SunX509")
        kmf.init(ksKeys, passphrase)
        
        // TrustManager decides whether to allow connection
        val tmf = TrustManagerFactory.getInstance("SunX509")
        tmf.init(ksTrust)
        
        val sslCtx = ssl.SSLContext.getInstance("TLS")
        sslCtx.init(kmf.getKeyManagers, tmf.getTrustManagers, null)
        sslCtx
    }
}
