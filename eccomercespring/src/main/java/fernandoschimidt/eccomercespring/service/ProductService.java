package fernandoschimidt.eccomercespring.service;

import fernandoschimidt.eccomercespring.model.Product;
import fernandoschimidt.eccomercespring.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public List<Product> listAll() {
        return productRepository.findAll();
    }
}
