package fernandoschimidt.eccomercespring.repository;

import fernandoschimidt.eccomercespring.model.user.ERole;
import fernandoschimidt.eccomercespring.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}