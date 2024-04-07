package fernandoschimidt.eccomercespring.repository;

import fernandoschimidt.eccomercespring.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
