@Repository
public interface BlockRepository extends JpaRepository<Block, Long> {
    Optional<Block> findByUserAndBlockedUser(User user, User blockedUser);
}
