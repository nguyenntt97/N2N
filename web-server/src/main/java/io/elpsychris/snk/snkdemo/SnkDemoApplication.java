package io.elpsychris.snk.snkdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class SnkDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SnkDemoApplication.class, args);
	}

}

